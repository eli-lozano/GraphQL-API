import { TASK_STATUS, Task } from "../../types/index.js";
import { teamMemberMock, teamMemberMock2, teamMemberMock3, teamMemberMock4, teamMemberMock5 } from "./team-member-mocks.js";

const mockLabel = `Implement feedback collector`;
const mockLabel2 = `Allow users to change between two tiers at the same price`;
const mockLabel3 = `Apply a prorated discount to a user when they move from a low to a high priced tier`;
const mockLabel4 = `Create subscription plans and discount codes in Stripe`;
const mockLabel5 = `Force SSL on any page that contains account info`;
const mockLabel6 = `Add analytics to pricing page`;
const mockLabel7 = `Install SSL certificate`;
const mockLabel8 = `Automate collection of feedback for weekly email report`;

// Mock Task Data for Response Demo/Testing 
const task1: Task = {
    id: 1,
    label: mockLabel,
    status: TASK_STATUS.TO_DO,
    assignee: null,
};

const task2: Task = {
    id: 2,
    label: mockLabel2,
    status: TASK_STATUS.IN_PROGRESS,
    assignee: teamMemberMock4
};

const task3: Task = {
    id: 3,
    label: mockLabel3,
    status: TASK_STATUS.IN_PROGRESS,
    assignee: teamMemberMock3,
};

const task4: Task = {
    id: 4,
    label: mockLabel4,
    status: TASK_STATUS.READY_FOR_QA,
    assignee: teamMemberMock2,
};

const task5: Task = {
    id: 5,
    label: mockLabel5,
    status: TASK_STATUS.READY_FOR_QA,
    assignee: teamMemberMock5,
};

const task6: Task = {
    id: 6,
    label: mockLabel6,
    status: TASK_STATUS.READY_FOR_QA,
    assignee: teamMemberMock2,
};

const task7: Task = {
    id: 7,
    label: mockLabel7,
    status: TASK_STATUS.DONE,
    assignee: teamMemberMock,
};

const task8: Task = {
    id: 8,
    label: mockLabel8,
    status: TASK_STATUS.READY_TO_DEPLOY,
    assignee: teamMemberMock,
};

const taskMocks = [
    task1,
    task2,
    task3,
    task4,
    task5,
    task6,
    task7,
    task8,
];

export {
    taskMocks,
}
