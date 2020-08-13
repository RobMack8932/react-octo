import React, { Component } from 'react'

export class Pictures extends React.Component {
  render(props) {
    return (
      <>
        <div class="grid-container">
          <div class="grid-item1">
            <img src={this.props.picture}></img>
            <div class="textunderneath">
              <p>{this.props.number}</p>
              <p>{this.props.name}</p>
              <span>
                <img class="imageunderneath" src={this.props.author1}></img>
                <img class="imageunderneath" src={this.props.author2}></img>
                <img class="imageunderneath" src={this.props.author3}></img>
              </span>
            </div>
          </div>
        </div>
      </>
    )
  }
}
