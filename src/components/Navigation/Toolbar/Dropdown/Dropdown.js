import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Dropdown extends Component {
    render() {
        return (
            <>
                <div class="dropdown">
                    <button type="button" class="btn btn-dark dropdown-toggle" data-toggle="dropdown">
                        View category
                    </button>
                    <div class="dropdown-menu">

                        {/*<Link to="/categoryOpr">CategoryOpr</Link> */}
                        <li role="presentation"><Link class="dropdown-item" to="/singleCategory">Category</Link></li>
                        <li role="presentation"><Link class="dropdown-item" to="/categoryOpr">CategoryOpr</Link>
                        </li>
                    </div>
                </div>
            </>
        );
    }
}

export default Dropdown;