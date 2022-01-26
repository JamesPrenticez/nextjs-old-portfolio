import React, { Component } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import Card from './Card';
import {data} from '../data';

export default class Grid extends Component {
  state = {
    type: 'grid',
    sort: 'asc',
    filteredIds: [],
    stagger: 'forward',
    spring: 'noWobble'
  };

  addToFilteredIds = id => {
    this.setState(prevState => {
      return {
        filteredIds: prevState.filteredIds.concat(id)
      };
    });
  };

  render() {
    return (
      <div className='bg-black w-5/6 h-5/6 mt-7'>

        {/* Row of Buttons */}
        <div className='inline-flex w-full bg-black'>
          {/* Ascending  */}
          <button
            className='bg-black p-4 hover:bg-gray-700'
            type='button'
            onClick={() => {this.setState({sort: 'asc'})}}
          >
            Ascending 
          </button>

          {/* Descending  */}  
          <button
            className='bg-black p-4 hover:bg-gray-700'
            type='button'
            onClick={() => {this.setState({sort: 'desc'})}}
          >
            Descending
          </button>

          {/* Grid  */}  
          <button
            className='bg-black p-4 hover:bg-gray-700'
            type='button'
            onClick={() => {this.setState({type: 'grid'})}}
          >
            Grid
          </button>

          {/* List */}
          <button
            disabled
            className='bg-black p-4 hover:bg-gray-700 disabled:cursor-not-allowed '
            type='button'
            onClick={() => {this.setState({type: 'list'})}}
          > 
            List
          </button>

          {/* Show All */}
          <button
            className='bg-gray-900 p-4 hover:bg-gray-700'
            onClick={() => {this.setState({filteredIds: []})}}
          >
            Show All
          </button>
        </div>

        <Flipper
          flipKey={`${this.state.type}-${this.state.sort}-${JSON.stringify(this.state.filteredIds)}-${JSON.stringify(this.state.stagger)}`}
          spring={this.state.spring}
          staggerConfig={{
            default: {
              reverse: this.state.stagger !== 'forward',
              speed: 1
            }
          }}
          decisionData={this.state}
        >
          <Flipped flipId='list'>
            <div className={this.state.type === 'grid' ? 'fm-grid' : 'fm-list'}>
              <Flipped inverseFlipId='list'>
                <ul className='list-contents'>
                  {[...data]
                    .filter(d => !this.state.filteredIds.includes(d.id))
                    .sort((a, b) => {
                      if (this.state.sort === 'asc') {
                        return a.id - b.id;
                      } else {
                        return b.id - a.id;
                      }
                    })
                    .map(({ title, id, desc, src, tags, color }) => (
                      <Card
                        id={id}
                        title={title}
                        desc={desc}
                        src={src}
                        tags={tags}
                        color={color}
                        stagger={['forward', 'reverse'].includes(this.state.stagger)}
                        type={this.state.type}
                        key={id}
                        addToFilteredIds={this.addToFilteredIds}
                      />
                    ))}
                </ul>
              </Flipped>
            </div>
          </Flipped>
        </Flipper>
      </div>
    );
  }
}