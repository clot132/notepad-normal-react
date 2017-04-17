import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import SaveAsBox from '.';
import MainMenuData from '../../App/ui-data'

describe('SaveAsBox Component', () => {
  const props = {
    // saveAsBox: mainMenuData.topLevel.items[0].subLevel.items[1],
    // files: mainMenuData.topLevel.items[0].subLevel.items[1].gists.files,
    // onGistClick: sinon.spy()
  }
  it('renders with props passed to it', function () {
    expect(shallow(<SaveAsBox {...props}/>)
    .find('.saveAsBox').length).to.equal(1)
  })
})