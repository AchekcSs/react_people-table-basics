import { PersonRow } from '../PersonRow';

import type { Person } from '../../types';

type Props = {
  people: Person[];
};

export const PeopleTable = ({ people }: Props) => {
  return (
    <table
      data-cy="peopleTable"
      className="table is-striped is-hoverable is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>

      <tbody>
        {people.map(person => {
          const mother =
            people.find(({ name }) => name === person.motherName) || null;
          const father =
            people.find(({ name }) => name === person.fatherName) || null;

          return (
            <PersonRow
              key={person.slug}
              person={person}
              mother={mother}
              father={father}
            />
          );
        })}
      </tbody>
    </table>
  );
};
