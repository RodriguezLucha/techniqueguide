import React from 'react';
import AddQuickLog from './AddQuickLog.js';
import EditQuickLog from './EditQuickLog.js';

export class QuickLog extends React.Component {
  render() {
    let entries = [...this.props.entries];

    let selected_text = '';
    let selected_key = null;

    let selected_row = entries.filter(entry => entry.active);
    if(selected_row.length > 0) {
      selected_key = selected_row[0].key;
      selected_text = selected_row[0].data;
    }

    entries = entries.map(entry => {
      const className = entry.active ? 'active' : '';
      entry['className'] = className;
      return entry;
    });

    const renderedEntries = entries.map((entry) => (
      <tr className={entry.className}
        disabled="true"
        key={entry.key}
        onClick={() => this.props.onClickSelectRow(entry.key)}>
        <td>{entry.data}</td>
      </tr>
    ));

    return (
      <div className='ui segments'>
        <div className='ui center aligned massive attached inverted segment'>
          <i aria-hidden="true" className="pencil icon"></i> Quick Log
        </div>
        <table className="ui celled attached selectable table">
          <thead>
            <tr>
              <th>Entries</th>
            </tr>
          </thead>
          <tbody>
            {renderedEntries}
          </tbody>
        </table>

        <div className='ui right floated buttons'>
          <AddQuickLog onClickAdd={this.props.onClickAdd}/>
          <EditQuickLog
            onClickEdit={this.props.onClickEdit}
            selected_key={selected_key}
            selected_text={selected_text}
          />
          <button
            className="ui button"
            disabled={!selected_key}
            onClick={() => this.props.onClickRemove(selected_key)}>
            <i aria-hidden="true" className="remove icon"/> Remove
          </button>
        </div>
        <div className="ui hidden attached clearing divider"/>

      </div>
    );
  }
}
