function App() {
    return (
      <div>
        <Person
          name="Cam"
          age={23}
          hobbies={["coding", "music", "cooking"]}
        />
        <Person 
            name="Indie" 
            age={5} 
            hobbies={["barking", "fetch"]} />
        <Person
          name="Cora"
          age={20}
          hobbies={["running", "watching netflix"]}
        />
        <Person
          name="Cenna"
          age={8}
          hobbies={["reading", "decorating", "cleaning"]}
        />
      </div>
    );
  }