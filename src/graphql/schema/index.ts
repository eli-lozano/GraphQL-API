const typeDefs = `#graphql
    type Task {
        id: Int!
        label: String!
        status: String!
        assignee: TeamMember
    }
    type TeamMember {
        id: ID!
        name: String!
        color: String!
    }
    type Query {
        tasks: [Task!]!
        teamMembers: [TeamMember!]
        maxTaskId: Int!
    }
`;

export {
    typeDefs
}
