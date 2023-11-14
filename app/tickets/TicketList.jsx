import React from "react";

// here we can define another async function to fetch data and can called directly inside async functional component
"client";
async function getTickets() {
  const baseUrl = process.env.BASE_URL;

  const response = await fetch(`${baseUrl}/tickets`, {
    next: {
      revalidate: 0,
    },
  });

  return response.json();
}
// when we use server component we can declare as async function( Component )

export default async function TicketList() {
  const tickets = await getTickets();
  return (
    <>
      {tickets.map((ticket, index) => (
        <div key={ticket.id} className="card my-5">
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0, 200)}...</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </div>
      ))}

      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets !!</p>
      )}
    </>
  );
}
