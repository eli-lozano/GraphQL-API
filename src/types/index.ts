enum TASK_STATUS {
    TO_DO = 'To do',
    IN_PROGRESS = 'In Progress',
    READY_FOR_QA = 'Ready for QA',
    READY_TO_DEPLOY = 'Ready to Deploy',
    DONE = 'Done',
};

type TaskId = number;
type TeamMemberId = string;

type TeamMember = {
    id: TeamMemberId;
    name: string;
    color: string;
}

type Task = {
    id: TaskId;
    label: string;
    status: TASK_STATUS;
    assignee?: TeamMember;
}

export type { Task, TeamMember, TaskId, TeamMemberId };
export {
    TASK_STATUS
}
