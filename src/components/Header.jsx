import React, { Component } from 'react'

export class Header extends React.Component {
  render(props) {
    return <p>{this.props.header}</p>
  }
}
