export const GetPostsQuery = `
    query Project {
        projectCollection(orderBy: { createdAt: ASC }, first: 10) {
            edges {
                node {
                id
                title
                description
                image
                    createdBy {
                        avatarUrl
                        name
                        id
                    }
                }
            }
        }
    }
`;