import _ from 'lodash';
import './style.css';

const component = () => {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'Data Cat'], " ");
    element.classList.add('hello');

    return element;
};

document.body.appendChild(component());