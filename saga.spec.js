import test from 'tape';
import { call} from 'redux-saga/effects';
import { incrementAsync, delay } from './saga';
test(' incrementAsync saga test',(assert) =>{
    const gen = incrementAsync();
    assert.deepEqual(
        gen.next().value,
        call(delay,1000)
    )
    assert.end()
});