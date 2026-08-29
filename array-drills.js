const posts = [
  { id: 1, author: "Ana", title: "Flexbox Deep Dive",      score: 91, tags: ["css", "layout"],         published: true  },
  { id: 2, author: "Ben", title: "Understanding Closures", score: 78, tags: ["js", "fundamentals"],    published: true  },
  { id: 3, author: "Ana", title: "Grid vs Flexbox",        score: 84, tags: ["css", "layout", "grid"], published: false },
  { id: 4, author: "Cy",  title: "Async Basics",           score: 62, tags: ["js", "async"],           published: true  },
  { id: 5, author: "Ben", title: "Sorting Algorithms",     score: 95, tags: ["js", "algorithms"],      published: false },
  { id: 6, author: "Ana", title: "Responsive Images",      score: 55, tags: ["css", "images"],         published: true  },
];

const originalPosts = [...posts]; // To check later

// 1. All six titles, in original order.
const titles = posts.map(p => p.title);
console.log("1.", titles); // expect [ "Flexbox Deep Dive", "Understanding Closures", "Grid vs Flexbox", "Async Basics", "Sorting Algorithms", "Responsive Images"]

// 2. The published posts, as full post objects.
const publishedPosts = posts.filter(p => p.published);
console.log("2.", publishedPosts); // expect an array of full post objects, in the starting order, but only IDs 1, 2, 4, 6 (c95 that it's okay to summarize a long expect-comment like this)

// 3. Titles of published posts scoring 70 or higher → ["Flexbox Deep Dive", "Understanding Closures"]
const highScoringPublishedPosts = posts.filter(p => p.score >= 70 && p.published).map(p => p.title);
console.log("3.", highScoringPublishedPosts) // expect ["Flexbox Deep Dive", "Understanding Closures"]

// 4. Combined score of all published posts → 286
const combinedPostScore = posts.filter(p => p.published).reduce((acc, p) => acc += p.score, 0);
console.log("4.", combinedPostScore); // expect 286

// 5. Post count per author → { Ana: 3, Ben: 2, Cy: 1 }
const postCountPerAuthor = posts.reduce((acc, p) => {
    if (!(p.author in acc)) {
        acc[p.author] = 0;
    }
    acc[p.author] += 1; // c90 this is legal
    return acc;
}, {});
console.log("5.", postCountPerAuthor); // expect { Ana: 3, Ben: 2, Cy: 1 }

// 6. Titles of the top 3 posts by score, best first → ["Sorting Algorithms", "Flexbox Deep Dive", "Grid vs Flexbox"] — and afterward, posts[0].title must still be "Flexbox Deep Dive".
const top3PostsByTitle = [...posts].sort((a, b) => b.score - a.score).slice(0,3).map(p => p.title); // I extremely didn't remember the intuition of when I want sort to be positive or negative except that I remembered that you want b-a to get a descending order
console.log("6.", top3PostsByTitle); // expect { Ana: 3, Ben: 2, Cy: 1 }

// 7. Every tag used anywhere, no duplicates, alphabetized → ["algorithms", "async", "css", "fundamentals", "grid", "images", "js", "layout"]
const uniqueTags = Array.from(posts.reduce((acc, p) => {
    const postTags = p.tags.reduce((acc2, t) => {
        acc2.add(t);
        return acc2;
    }, new Set());

    acc = acc.union(postTags);
    return acc;
}, new Set())).sort();
console.log("7.", uniqueTags); // expect ["algorithms", "async", "css", "fundamentals", "grid", "images", "js", "layout"]

// 8. The first post scoring under 60. Then, in a comment: what does that same expression evaluate to if you ask for under 40 instead? (Answer from a run, not from memory.)
const firstPostUnder60 = posts.find(p => p.score < 60);
console.log("8.", firstPostUnder60); // expect the full object for post ID 6. for under 40, I would expect "undefined".

// 9. Two one-liners producing booleans: (a) does every published post have at least one tag? (b) does Ben have any unpublished post? (State both expected values in your expect-comments — from runs.)
const doPublishedPostsHaveTags = posts.filter(p => p.published).every(p => p.tags.length > 0);
console.log("9a.", doPublishedPostsHaveTags); // expect true

const doesBenHaveUnpublishedPosts = posts.filter(p => p.author === "Ben").some(p => !p.published);
console.log("9b.", doesBenHaveUnpublishedPosts); // expect true

// 10. Group the titles by author → { Ana: ["Flexbox Deep Dive", "Grid vs Flexbox", "Responsive Images"], Ben: ["Understanding Closures", "Sorting Algorithms"], Cy: ["Async Basics"] }
const titlesByAuthor = posts.reduce((acc, p) => {
    if (!(p.author in acc)) {
        acc[p.author] = [];
    }

    acc[p.author].push(p.title);

    return acc;
}, {});
console.log("10.", titlesByAuthor); // expect { Ana: ["Flexbox Deep Dive", "Grid vs Flexbox", "Responsive Images"], Ben: ["Understanding Closures", "Sorting Algorithms"], Cy: ["Async Basics"] }

console.log("Posts check.", JSON.stringify(posts) === JSON.stringify(originalPosts)); // Expect true