import React, { Component } from 'react'
import './index.css'

class MainMenu extends Component {
  constructor(props) {
    super(props)
    this.topLevelMenu = this.topLevelMenu.bind(this)
    this.renderSubLevelMenu = this.renderSubLevelMenu.bind(this)
    this.renderOpenFileDialogue = this.renderOpenFileDialogue.bind(this)
    this.renderAvailableFiles = this.renderAvailableFiles.bind(this)
    this.renderEachGistFile = this.renderEachGistFile.bind(this)
    
  }

  renderSubLevelMenu (subMenu,index) {

    return (
      <li key={index} onClick={(event) => this.props.onClick(event, subMenu)}>{subMenu.label}</li>
    )
  }

  renderOpenFileDialogue (gists) {
    // maybe render the open file dialogue here?
    return (<div><ul><li>{gists.map( (files, index) => this.renderAvailableFiles(files, index))}</li></ul></div>)
  }

  renderAvailableFiles (files, index) {
    return (<ul key={index}>{files.map((file, index) => this.renderEachGistFile(file, index))}</ul>)
  }

  renderEachGistFile (file, index) {
    return (<li key={index}>{file}</li>)
  }

  topLevelMenu (menu, index) {
    //const subLevel = menu.subLevel
    return (
      <li className={'menuItem'} key={menu.label} onClick={(event) => this.props.onClick(event, menu)}> {menu.label}
          <ul className={`subMenu ${menu.subLevel.visible ? menu.menu : menu.menu + 'Hidden'}`}>
            {menu.subLevel.items.map((subItem, index) => this.renderSubLevelMenu(subItem,index))}
          </ul>
        
      </li>
    )

  }
  render () {
    return (
      <div>
      <ul className='menu'
        onMouseUp={() => this.props.onMouseUp()}>
          {this.props.menu.topLevel.items.map(this.topLevelMenu)}
      </ul>
      </div>
    )
  }
}

export default MainMenu