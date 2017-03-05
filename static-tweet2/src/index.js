import React from 'react';
import ReactDOM from 'react-dom';
import Time from './time';
import CommitMessage from './CommitMessage';
import FileListItem from './FileListItem';
import './index.css';


const testFiles = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: 'Initial Commit'
    }
  },
  {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: 'Initial Commit'
    }
  },
  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: 'Added a readme'
    }
  },
];

let FileList = React.createClass({
  propTypes: {
    files: React.PropTypes.array
  },
  render(){
    let files = this.props.files;
    return (
      <div className="file-list">
        <div>
          {files.map(file =>
            <FileListItem key={file.id} file={file}/>
          )}
        </div>
      </div>
    );
  }
});



function FileIcon({file}){
  let icon = 'fa-file-text-o';
  if(file.type === 'folder'){
    icon = 'fa-folder';
  }
  return (
    <div className="file-icon">
      <i className={`fa ${icon}`}/>
    </div>
  );
}
FileIcon.propTypes = {
  file: React.PropTypes.object.isRequired
};

function getFileName(file){
  return [
    <FileIcon file={file} key={0}/>,
    <div className="file-name" key={1}>{file.name}</div>
  ];
}



ReactDOM.render(
  <FileList files={testFiles}/>,
  document.getElementById('root')
);
