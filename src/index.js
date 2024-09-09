import _ from 'lodash';
import './style.css';
import Logo from './logo.png';

const component = () => {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'Data Cat'], " ");
    element.classList.add('hello');

    const myLogo = new Image();
    myLogo.src = Logo;

    element.appendChild(myLogo);

    return element;
};

document.body.appendChild(component());