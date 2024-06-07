import JobListItem from "./JobListItem";
import data from "../data.json";
import IUserData from "./_types/IUSerData";
import processData from "./_functions/processData";

// component which includes all job list items
interface JobListProps {
  filter: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function JobList({ filter, setFilter }: JobListProps) {
  let userData: IUserData[] = processData(data, filter);
  let JobListItems: JSX.Element[] = [];

  for (let i = 0; i < userData.length; i++) {
    JobListItems.push(JobListItem({ data: userData[i], filter, setFilter }));
  }

  let TW = filter.length > 0 ? "my-6 lg:my-1" : "my-16 lg:my-20";

  return (
    <div className={`mx-8 flex flex-col gap-11 lg:mx-44 lg:gap-6 ${TW}`}>
      {JobListItems}
    </div>
  );
}
