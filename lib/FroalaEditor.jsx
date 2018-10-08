import React from 'react';
import FroalaEditorFunctionality from './FroalaEditorFunctionality.jsx';

export default class FroalaEditor extends FroalaEditorFunctionality {
  render () {
    return <this.tag ref={this.el}>{this.props.children}</this.tag>;
  }
}