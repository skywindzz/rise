import React from 'react';

class NewHabitCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      habitList: [],
      habitName: '',
      priority: undefined,
      inverse: false,
      firstLaw: '',
      secondLaw: '',
      thirdLaw: '',
      fourthLaw: '',
      duration: undefined,
      time: undefined
    };
  }

  addNewHabitCard = event => {
    let target = event.target;
    let value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });

    //package the value user input into one variable and push it inside the habiList array

    console.log(event.target.value);
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('event submitted');
  };

  render() {
    return (
      <form
        css={{
          lineHeight: '2.3rem',
          fontFamily: 'sans-serif',
          display: 'grid',
          borderStyle: 'solid',
          borderWidth: '1px',
          borderRadius: '10px',
          width: '80%',
          justifyContent: 'center',
          boxShadow: '5px 10px #aaaaaa'
        }}
        onSubmit={this.handleSubmit}
      >
        <span
          css={{ fontSize: '2.5em', marginTop: '0.5em', marginBottom: '0.5em' }}
        >
          New Habit Card
        </span>
        <div>
          Name:{' '}
          <input
            value={this.state.habitName}
            name='habitName'
            type='text'
            onChange={this.addNewHabitCard}
          />
        </div>
        <div>
          Priority(1 - 5):{' '}
          <input
            type='number'
            value={this.state.priority}
            name='priority'
            onChange={this.addNewHabitCard}
          />{' '}
        </div>

        <div>
          Inverse habit?:{' '}
          <input
            type='checkbox'
            name='inverse'
            value={this.state.inverse}
            onChange={this.addNewHabitCard}
          />
        </div>
        <div>
          <div>
            Make it obvious:{' '}
            <input
              name='firstLaw'
              type='text'
              value={this.state.firstLaw}
              onChange={this.addNewHabitCard}
            />
          </div>
          <div>
            Make it attractive:{' '}
            <input
              type='text'
              name='secondLaw'
              value={this.state.secondLaw}
              onChange={this.addNewHabitCard}
            />
          </div>
          <div>
            Make it easy:{' '}
            <input
              name='thirdLaw'
              type='text'
              value={this.state.thirdLaw}
              onChange={this.addNewHabitCard}
            />
          </div>
          <div>
            Make it satisfying:
            <input
              name='fourthLaw'
              type='text'
              value={this.state.fourthLaw}
              onChange={this.addNewHabitCard}
            />
          </div>
        </div>

        <div>
          Minimum Duration(minutes):{' '}
          <input
            type='number'
            name='duration'
            value={this.state.duration}
            onChange={this.addNewHabitCard}
          />
        </div>
        <div>
          Schedule Time:(mm/dd/yyyy):{' '}
          <input
            type='date'
            name='time'
            value={this.state.time}
            onChange={this.addNewHabitCard}
          />
        </div>

        <button
          onClick={this.addNewHabitCard}
          css={{ marginBottom: '2rem', borderColor: 'lightgreen' }}
        >
          submit habit card
        </button>
      </form>
    );
  }
}

export default NewHabitCard;
