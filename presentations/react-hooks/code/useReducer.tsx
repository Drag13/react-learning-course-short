import { FC, useCallback, useReducer } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

enum ActionType {
  SET_NAME,
  INCREMENT_SALARY,
  FIRE,
}

type NumberAction<TAction> = {
  type: TAction;
  payload: number;
};

type EmptyAction<TAction> = {
  type: TAction;
};

type Action =
  | NumberAction<ActionType.INCREMENT_SALARY>
  | EmptyAction<ActionType.FIRE>;

type State = {
  salary: number;
  fired: boolean;
  name: string;
};

const stateReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.FIRE:
      return { ...state, salary: 0, fired: true };
    case ActionType.INCREMENT_SALARY:
      return { ...state, salary: state.salary + action.payload };
  }
};

const defaultState = { name: "Super Employee", salary: 100, fired: false };

const App = () => {
  const [state, dispatch] = useReducer(stateReducer, defaultState);
  const { name, salary, fired } = state;
  const fire = useCallback(() => dispatch({ type: ActionType.FIRE }), []);
  const incrementSalary = useCallback(
    () => dispatch({ type: ActionType.INCREMENT_SALARY, payload: 50 }),
    []
  );

  return fired ? (
    <Fired employeeName={name} />
  ) : (
    <EmployeeInterface
      employeeName={name}
      onFired={fire}
      onSalaryIncrement={incrementSalary}
      salary={salary}
    />
  );
};

const Fired: FC<{ employeeName: string }> = ({ employeeName }) => (
  <div>{employeeName} is fired</div>
);

type EmployeeInterfaceProps = {
  employeeName: string;
  salary: number;
  onSalaryIncrement: () => void;
  onFired: () => void;
};

const EmployeeInterface: FC<EmployeeInterfaceProps> = ({
  employeeName,
  salary,
  onFired,
  onSalaryIncrement,
}) => {
  return (
    <div>
      <h2>Employee: {employeeName}</h2>
      <div>Salary: {salary}</div>
      <button type="button" onClick={onSalaryIncrement}>
        Increase salary for 50
      </button>
      <button type="button" onClick={onFired}>
        Fire employee
      </button>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);

reportWebVitals();
