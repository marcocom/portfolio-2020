import React, {ChangeEvent, FunctionComponent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IState, RootDispatcher} from './redux-reducer'

interface Props {
}

interface StateProps {
  name: string;
  address: string;
}

const ReduxHooks:FunctionComponent<Props> = (props:Props):JSX.Element => {

  const {name, address} = useSelector<IState, StateProps>((state:IState) => {
    return {
      name: state.name,
      address: state.address
    }
  });

  const dispatch = useDispatch();
  const rootDispatcher:RootDispatcher = new RootDispatcher(dispatch);

  return (
    <form style={{display:'flex', flexFlow:'column', width:'50%', margin: '10px auto'}}
          onSubmit={(e)=>e.preventDefault()}>
      <input type="text" placeholder="name"
        onChange={(e: ChangeEvent<HTMLInputElement>) => rootDispatcher.updateName(e.target.value)}/>
      <input type="text" placeholder="address"
             onChange={(e: ChangeEvent<HTMLInputElement>) => rootDispatcher.updateAddress(e.target.value)}/>
      <button type="submit"  >Submit</button>
      <h1>{name}</h1>
      <h1>{address}</h1>
    </form>
  );
};

export default ReduxHooks;
