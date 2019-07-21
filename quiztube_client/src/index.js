import React, { Component } from 'react';
import { render } from 'react-dom';
import _ from 'lodash';
import './style/style.css';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/youtube/search_bar';
import VideoList from './components/youtube/video_list';
import VideoDetail from './components/youtube/video_detail';
import QuizApp from './components/quiz/QuizApp';
import QuizCreate from './components/quiz/CreateQuiz';
import Create from './components/quiz/manage/Create';

const API_KEY = 'AIzaSyDKjRPdaV2oKrhB1xN0fHY5F35TEV33EKk';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      createQuiz : false
    }

    this.videoSearch('Class 1 English');
  }

  videoSearch(term) {
      YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    //throttles the live updating of search results
    const vidSearch = _.debounce((term) => {this.videoSearch(term)}, 500);

    return (

      <div class="container-fluid">
        <div class="row">
          <div class="container" >
            <SearchBar onSearchTermChange={vidSearch}/>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4  feedback-button" >
            <QuizApp/>
          </div>
          <div class="col-sm-8" >
            <VideoDetail video={this.state.selectedVideo} />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-3 quizlist" >
            <Create/>
          </div>
          <div class="col-sm-3 tubelist" >
              <VideoList 
              onVideoSelect={selectedVideo => this.setState({selectedVideo: selectedVideo})}
              videos={this.state.videos}
             />
          </div>
        </div>

      </div>
      // <div className="container">
      //   <div className="panel panel-default">
      //     <div className="panel-heading">
      //       <h3 className="panel-title">
      //         CREATE QUIZ
      //       </h3>
      //     </div>
      //     <div className="panel-body">

      //     </div>
      //   </div>
      // </div>
      
      // <div className ="main">
      //   <SearchBar onSearchTermChange={vidSearch}/>
          
  
      //     <div className="col-md-4">
      //       <Create/>
      //     </div>
          
      //     <div className="video col-md-8">
      //       <VideoDetail video={this.state.selectedVideo} />
      //       <VideoList 
      //         onVideoSelect={selectedVideo => this.setState({selectedVideo: selectedVideo})}
      //         videos={this.state.videos}
      //       />
      //     </div>
        
      // </div>
    );
  }
}

render(<App />, document.getElementById('root'));
