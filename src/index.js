import _ from 'lodash';

const component = () => {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'Data Cat'], " ");

    return element;
};

document.body.appendChild(component());