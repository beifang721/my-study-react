import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class TodoItem extends Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.content.map((item, index) => {
                            return (
                                <li
                                    key={`${item}-${index}`}
                                    onClick={() => {
                                        this.props.delete(index);
                                    }}
                                    dangerouslySetInnerHTML={{ __html: item }}
                                ></li>
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
}

TodoItem.propTypes = {
    content: PropTypes.array
}


