import { MainMenu } from "components/MainMenu";
import {MyQuestion} from "../MyQuestion";
import {RightAnswer} from "../RightAnswer";
import {StatisticsTable} from "../StatisticsTable";

export function App() {
  return (
    <>
      <MainMenu/>
      <MyQuestion/>
      <RightAnswer/>
      <StatisticsTable/>
    </>
  );
}
