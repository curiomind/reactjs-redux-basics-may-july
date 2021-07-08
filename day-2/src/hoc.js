import React from 'react';

export default function HOC(Component) {
  return class HOCComponent extends React.Component {
    render() {
      return <Component />
    }
  }
}
