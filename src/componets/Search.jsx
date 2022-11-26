import React from "react";
import { Search, Option, Detail, Organizations } from "searchpal";
import { useState } from "react";


export default class Searcg extends React.Components{
    constructor(props) {
        super(props);
      }
render()
{

const UsersSearch = ({ users, session }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Search for a user</button>
      <Search
        label="Search for a user..."
        open={open}
        onClose={() => setOpen(false)}
        link={({ href, children }) => <a href={href}>{children}</a>}
      >
        {users.map((user) => (
          <Option
            label={user.name}
            sublabel={user.email}
            img={{ src: user.avatar, alt: `${user.name} profile picture` }}
            href={`/users/${user.id}`}
            keywords={(getKeywords) =>
              getKeywords(
                user.email,
                user.social && user.social.handle,
                user.organizations.map((org) => [
                  org.name,
                  org.locations.map((location) => [
                    location.city,
                    location.state,
                  ]),
                ])
              )
            }
            key={user.id}
          >
            <Detail label="Joined" value={user.joined} />
            {user.organizations.length && (
              <Detail
                label="Organizations"
                value={<Organizations items={user.organizations} />}
              />
            )}
          </Option>
        ))}
      </Search>
    </>
  );
};
}

}