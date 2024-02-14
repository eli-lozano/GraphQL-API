import { ApolloServer } from "@apollo/server";
import { typeDefs } from "../../graphql/schema";
import { taskMocks } from "../../data/mocks/task-mocks";
import { teamMemberMocks } from "../../data/mocks/team-member-mocks";
import { MAX_TASK_ID_MOCK } from "../../common/constants";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import assert from "assert";

let mocks = {};
let testServer: ApolloServer;
describe('Apollo Server', () => {
    beforeAll(() => {
        mocks = {
            Query: () => ({
                tasks: () => taskMocks,
                teamMembers: () => teamMemberMocks,
                maxTaskId: () => MAX_TASK_ID_MOCK,
            }),
        };

        testServer = new ApolloServer({
            schema: addMocksToSchema({
                schema: makeExecutableSchema({ typeDefs }),
                mocks,
            })
        });
    });
    it('returns task data when tasks query is executed', async () => {
        const response = await testServer.executeOperation({
            query: `
                query {
                    tasks {
                        id
                        label
                        status
                        assignee {
                            id
                            name
                            color
                        }
                    }
                }
            `
        });

        assert(response.body.kind === 'single');
        expect(response.body.singleResult.errors).toBeUndefined();
        expect(response.body.singleResult.data.tasks).toEqual(taskMocks);
    });

    it('returns team member data when team member query is executed', async () => {
        const response = await testServer.executeOperation({
            query: `
                query {
                    teamMembers {
                        id
                        name
                        color
                    }
                }
            `
        });

        assert(response.body.kind === 'single');
        expect(response.body.singleResult.errors).toBeUndefined();
        expect(response.body.singleResult.data.teamMembers).toEqual(teamMemberMocks);
    });

    it('returns max task Id when max task Id query is executed', async () => {
        const response = await testServer.executeOperation({
            query: `
                query {
                    maxTaskId
                }
            `
        });

        assert(response.body.kind === 'single');
        expect(response.body.singleResult.errors).toBeUndefined();
        expect(response.body.singleResult.data.maxTaskId).toEqual(MAX_TASK_ID_MOCK);
    });
});
