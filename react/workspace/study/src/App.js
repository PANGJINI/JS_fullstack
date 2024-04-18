import './App.css';
import Jsx01 from './0_react basic/Jsx01';
import Jsx02 from './0_react basic/Jsx02';
import Jsx03 from './0_react basic/Jsx03';
import Jsx04 from './0_react basic/Jsx04';
import Jsx05 from './0_react basic/Jsx05';
import Container from './a_props/Container';
import UserContainer from './b_map/expert/UserContainer';
import Count from './c_state/basic/Count';
import Sound from './c_state/basic/Sound';
import Color from './c_state/basic/Color';
import Name from './d_reference/basic/Name';
import Check from './d_reference/basic/Check';
import Checkbox from './d_reference/basic/Checkbox';
import CheckInput from './d_reference/basic/CheckInput';
import FoodContainer from './d_reference/expert/FoodContainer';

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

    // <UserContainer />
    // <Count />
    // <Sound />
    // <Name />
    // <Color />
    // <Name />
    // <Check />
    // <Checkbox />
    // <CheckInput />
    <FoodContainer />
  );
}

export default App;
