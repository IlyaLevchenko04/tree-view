import React from 'react';
import './App.css';
import TreeView, { TreeViewNew } from './components/TreeViewNew/TreeViewNew';
import { NEW_DEFAULT_DATA } from './constants/defaultData';
import { Item } from './types';

function App() {
  function renderList(data: Item | Item[], id?: string) {
    if (Array.isArray(data)) {
      return data.map((item, idx) => (
        <TreeView.List
          key={id ? `${id}.${item.title}.${idx}` : `${item.title}.${idx}`}
        >
          <TreeView.ListItem>
            <TreeView.Branch
              id={id ? `${id}.${item.title}.${idx}` : `${item.title}.${idx}`}
            >
              <TreeView.Controller>
                <TreeView.BranchText>{item.title}</TreeView.BranchText>
              </TreeView.Controller>
              <TreeView.BranchContent>
                {renderList(
                  item,
                  id ? `${id}.${item.title}.${idx}` : `${item.title}.${idx}`,
                )}
              </TreeView.BranchContent>
            </TreeView.Branch>
          </TreeView.ListItem>
        </TreeView.List>
      ));
    }

    if (data.data) {
      return data.data.map((item, idx) => (
        <TreeView.List
          key={id ? `${id}.${item.title}.${idx}` : `${item.title}.${idx}`}
        >
          <TreeView.ListItem>
            <TreeView.Branch
              id={id ? `${id}.${item.title}.${idx}` : `${item.title}.${idx}`}
            >
              <TreeView.Controller>
                <TreeView.BranchText>{item.title}</TreeView.BranchText>
              </TreeView.Controller>
              <TreeView.BranchContent>
                {renderList(
                  item,
                  id ? `${id}.${item.title}.${idx}` : `${item.title}.${idx}`,
                )}
              </TreeView.BranchContent>
            </TreeView.Branch>
          </TreeView.ListItem>
        </TreeView.List>
      ));
    }

    if (data.value) {
      return (
        <TreeView.List>
          <TreeView.ListItem>
            <TreeView.Branch id={id as string}>
              <TreeView.BranchContent>
                <TreeView.Text>{data.value}</TreeView.Text>
              </TreeView.BranchContent>
            </TreeView.Branch>
          </TreeView.ListItem>
        </TreeView.List>
      );
    }

    return <h1>oops its empty...</h1>;
  }

  return (
    <div className="App">
      <TreeViewNew data={NEW_DEFAULT_DATA}>
        <h2>Tree-view component</h2>
        {renderList(NEW_DEFAULT_DATA)}
      </TreeViewNew>
    </div>
    // <Basic />
  );
}

export default App;
