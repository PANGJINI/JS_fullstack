import './App.css';
import Jsx01 from './Jsx01';
import Jsx02 from './Jsx02';
import Jsx03 from './Jsx03';
import Jsx04 from './Jsx04';
import Jsx05 from './Jsx05';
import Container from './a_props/Container';
import FoodContainer from './b_map/FoodContainer';
import UserContainer from './b_map/expert/UserContainer';
import Count from './c_state/basic/Count';

function App() {
  return (
    // 컴포넌트는 무조건 대문자로 시작한다.
    // 컴포넌트는 무조건 닫힘태그가 있어야 한다.
    // <Jsx01 />    혹은    <Jsx01></Jsx01>
    // <Jsx01> </>은 안된다.
    // 리액트는 성능상 하나의 돔트리만 허용한다.

    // <>배고파😫</>
    // <Jsx01 />
    // <Jsx02 />
    // <Jsx03 />
    // <Jsx04 />
    // <Jsx05 />
    // <Container/>
    // <FoodContainer />
    // <UserContainer />
    <Count />
  );
}

export default App;
