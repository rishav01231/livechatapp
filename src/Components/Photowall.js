import React,{Component} from 'react';
import Photo from './Photo'
class Photowall extends Component{
    render(){
        return<div class="photo-Grid">
            {this.props.posts.map((post , index) => <Photo key={index} post={post}/>)}
        </div>
    }
}
export default Photowall