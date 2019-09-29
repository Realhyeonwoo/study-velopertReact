# study-velopertReact

## Redux

- 하나의 애플리케이션 안에는 하나의 스토어
- 상태는 읽기 전용
- 변화를 일으키는 함수, 리듀서는 순수한 함수<br/>
  _ 리듀서느 함수는 이전 상태와, 액션 객체를 파라미터로 받음
  _ 이전의 상태는 절대로 건들이지 않고, 변화를 일으킨 새로운 상태 객체를 반환<br/> \* 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과값을 반환<br/>

### Ducks 패턴 사용

- src/store/modules/counter.js<br/>

  - 다른 모듈에서 작성하게 될 수도 있는 액션들과의 충돌을 방지하기 위해 액션이름을 지을 때 문자열의 앞부분에 모듈이름 추가

- import { combineReducers } from 'reudx'
- import { bindActionCreators } from 'redux';
- import { connect } from 'react-redux';
- import { createAction, handleActions } from 'redux-actions';

## Imuutable.js 사용

- Map(객체), List(배열) 등을 사용
- state 값을 얻기 위하여 .get을 사용 (이 점은 불편함)
- set / update 등으로 값을 변환

## Immer.js 사용

- produce 를 import 하여 draft를 사용하며 편리함
