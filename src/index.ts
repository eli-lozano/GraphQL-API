import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './graphql/schema/index.js';
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { taskMocks } from './data/mocks/task-mocks.js';
import { teamMemberMocks } from './data/mocks/team-member-mocks.js';
import { MAX_TASK_ID_MOCK } from './common/constants.js';

const mocks = {
    Query: () => ({
        tasks: () => taskMocks,
        teamMembers: () => teamMemberMocks,
        maxTaskId: () => MAX_TASK_ID_MOCK,
    }),
};

const startApolloServer = async () => {
    const server = new ApolloServer({
        schema: addMocksToSchema({
            schema: makeExecutableSchema({ typeDefs }),
            mocks,
        })
    });
    const { url } = await startStandaloneServer(server);
    console.log(`Server is running at ${url}`);
};

startApolloServer();
