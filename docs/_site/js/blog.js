document.addEventListener('DOMContentLoaded', () => {
    const blogList = document.getElementById('blog-list');
    const blogContent = document.getElementById('blog-content');

    // Function to load and display a post
    const loadPost = async (post) => {
        const lang = localStorage.getItem('language') || 'en';
                const path = lang === 'zh' ? post.content_url_cn : post.content_url;

        try {
            const response = await fetch(path);
            if (!response.ok) {
                throw new Error(`Failed to fetch ${path}: ${response.statusText}`);
            }
            const html = await response.text();
            blogContent.innerHTML = html;
        } catch (error) { 
            console.error('Error loading post:', error);
            blogContent.innerHTML = '<p>Error loading post. Please check the console for details.</p>';
        }
    };

    // Fetch the list of posts
    fetch('posts.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch posts.json: ${response.statusText}`);
            }
            return response.json();
        })
        .then(posts => {
            if (!blogList) return;
            blogList.innerHTML = ''; // Clear existing list

            posts.forEach(post => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                
                // Use a simple hash based on the title for the URL
                link.href = `#${post.title.replace(/\s+/g, '-')}`;
                link.textContent = post.title;

                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    window.location.hash = link.href.substring(link.href.indexOf('#'));
                    loadPost(post);
                });

                listItem.appendChild(link);
                blogList.appendChild(listItem);
            });

            // Check hash on page load to show the correct article
            const currentHash = window.location.hash;
            let postToLoad = posts[0]; // Default to the first post

            if (currentHash) {
                const postTitleFromHash = currentHash.substring(1).replace(/-/g, ' ');
                const foundPost = posts.find(p => p.title.toLowerCase().replace(/\s+/g, ' ') === postTitleFromHash.toLowerCase());
                if (foundPost) {
                    postToLoad = foundPost;
                }
            }

            if (postToLoad) {
                loadPost(postToLoad);
            }
        })
        .catch(error => {
            console.error('Error fetching or processing posts:', error);
            if (blogContent) {
                blogContent.innerHTML = '<p>Could not load blog posts. See console for details.</p>';
            }
        });

    // Handle language change to reload the article
    window.addEventListener('languageChanged', (e) => {
        const currentHash = window.location.hash;
        if (currentHash) {
            fetch('posts.json')
                .then(response => response.json())
                .then(posts => {
                    const postTitleFromHash = currentHash.substring(1).replace(/-/g, ' ');
                    const foundPost = posts.find(p => p.title.toLowerCase().replace(/\s+/g, ' ') === postTitleFromHash.toLowerCase());
                    if (foundPost) {
                        loadPost(foundPost);
                    }
                });
        }
    });
});
