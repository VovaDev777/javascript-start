// const tech = [
//     { label: 'HTML'},
//     { label: 'CSS'},
//     { label: 'JavaScript'},
//     { label: 'Node.js'},
//     { label: 'React'},
//     { label: 'Vue'},
//     { label: 'Next.js'},
//     { label: 'Mobx'},
//     { label: 'Redux'},
//     { label: 'React Router'},
//     { label: 'GraphQl'},
//     { label: 'PostgreSQL'},
//     { label: 'MongoDB'},
// ];


// const refs = {
//     list: document.querySelector('.js-list'),
//     input: document.querySelector('#filter'),
// };

// refs.input.addEventListener('input', _.throttle(onFilterChange, 300));

// const listItemsMarkup = createListItemsMarkup(tech);

// refs.list.innerHTML = listItemsMarkup;

// function createListItemsMarkup(items) {
//     // console.log(items.map(item => `<li>${item.label}</li>`).join(''));
//     return items.map(item => `<li>${item.label}</li>`).join('');
// }

// // createListItemsMarkup(tech);
// function onFilterChange(evt) {
//     const filter = evt.target.value.toLowerCase();

//     const filteredItems = tech.filter(t =>  
//         t.label.toLowerCase().includes(filter),
//         );
// }

// function populateList(markup) {
//     refs.list.innerHTML = markup;
// }


LIBRARY ieee;
USE ieee.std_logic_1164.ALL;

ENTITY function_of_logic IS
END ENTITY function_of_logic;

ARCHITECTURE stim of function_of_logic  IS
   component test_logic  
  port(
    a, b: IN std_logic;
    c, d: IN std_logic;
    conclusion : OUT std_logic
  );
   end component;

   SIGNAL a, b, c, d: std_logic
   SIGNAL conclusion : std_logic;

BEGIN
    the_test_logic: test_logic
        PORT MAP (
            a => a,
            b => b,
            c => c,
            d => d,
            conclusion => conclusion
        );

    stimuli: PROCESS
    BEGIN
        a <= '0'; b <= '0';
        c <= '0'; d <= '0';
        WAIT FOR 10 ns;

        a <= '0'; b <= '0';
        c <= '0'; d <= '1';
        WAIT FOR 10 ns;

        a <= '0'; b <= '0';
        c <= '1'; d <= '0';
        WAIT FOR 10 ns;

        a <= '0'; b <= '0';
        c <= '1'; d <= '1';
        WAIT FOR 10 ns;

        a <= '0'; b <= '1';
        c <= '0'; d <= '0';
        WAIT FOR 10 ns;

        a <= '0'; b <= '1';
        c <= '0'; d <= '1';
        WAIT FOR 10 ns;

        a <= '0'; b <= '1';
        c <= '1'; d <= '0';
        WAIT FOR 10 ns;

        a <= '0'; b <= '1';
        c <= '1'; d <= '1';
        WAIT FOR 10 ns;

        a <= '1'; b <= '0';
        c <= '0'; d <= '0';
        WAIT FOR 10 ns;

        a <= '1'; b <= '0';
        c <= '0'; d <= '1';
        WAIT FOR 10 ns;

        a <= '1'; b <= '0';
        c <= '1'; d <= '0';
        WAIT FOR 10 ns;

        a <= '1'; b <= '0';
        c <= '1'; d <= '1';
        WAIT FOR 10 ns;

        a <= '1'; b <= '1';
        c <= '0'; d <= '0';
        WAIT FOR 10 ns;

        a <= '1'; b <= '1';
        c <= '0'; d <= '1';
        WAIT FOR 10 ns;

        a <= '1'; b <= '1';
        c <= '1'; d <= '0';
        WAIT FOR 10 ns;

        a <= '1'; b <= '1';
        c <= '1'; d <= '1';
        WAIT FOR 10 ns;

        WAIT;
    END PROCESS stimuli;
END ARCHITECTURE stim;