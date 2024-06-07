import IUserData from "../_types/IUSerData";

// properties used for user filters
export default function userFilterItems(data: IUserData): string[] {
  return [data.role, data.level, ...data.languages, ...data.tools];
}
