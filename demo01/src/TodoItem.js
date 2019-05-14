import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class TodoItem extends Component {
    shouldComponentUpdate() {

    }
    render() {
        // JSX -> JS对象 -> 真实DOM
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


