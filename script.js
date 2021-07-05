const first_class_plusBtn = document.getElementById('first-class-plusBtn');
first_class_plusBtn.addEventListener('click',function(){
    // const first_class_ticket_amount = document.getElementById('first-class-ticket-amount');
    // const first_class_ticketAmount = parseInt(first_class_ticket_amount.value);
    // const total_amount = first_class_ticketAmount + 1 ;
    // first_class_ticket_amount.value = total_amount;
    // const first_class_prize = total_amount * 150;
    // document.getElementById('first-class-prize').innerText = first_class_prize;
    addAmount('first-class-ticket-amount','first-class-prize',150);
    subtotal();
    vatAmount();
    total();
})
document.getElementById('first-class-minusBtn').addEventListener('click',function(){
    subtractAmount('first-class-ticket-amount','first-class-prize',150);
    subtotal();
    vatAmount();
    total();
})

document.getElementById('first-class-ticket-amount').addEventListener('input',function(){
    // const first_class_ticket_amount = document.getElementById('first-class-ticket-amount');
    // const first_class_ticketAmount = parseInt(first_class_ticket_amount.value);
    // if (first_class_ticketAmount => 0) {
    //     const first_class_prize = first_class_ticketAmount * 150;
    //     document.getElementById('first-class-prize').innerText = first_class_prize;
    // }
    inputAmount('first-class-ticket-amount','first-class-prize',150);
    subtotal();
    vatAmount();
    total();
    
})

document.getElementById('economy-plusBtn').addEventListener('click',function(){
    addAmount('economy-ticket-amount','economy-prize',100);
    subtotal();
    vatAmount();
    total();
})

document.getElementById('economy-minusBtn').addEventListener('click',function(){
    subtractAmount('economy-ticket-amount','economy-prize',100);
    subtotal();
    vatAmount();
    total();
})

document.getElementById('economy-ticket-amount').addEventListener('input',function(){
    inputAmount('economy-ticket-amount','economy-prize',100);
    subtotal();
    vatAmount();
    total();
    
})

document.getElementById('book-nowBtn').addEventListener('click',function(){
    const full_form = document.getElementById('full-form');
    full_form.style.display='none';
    const booked_item = document.getElementById('booked-item');
    booked_item.style.display='block';
    
    const first_class_ticket_amount = document.getElementById('first-class-ticket-amount').value;
    const economy_ticket_amount = document.getElementById('economy-ticket-amount').value;
    const total_prize = document.getElementById('total').innerText;
    const total_booked_quantity = 'FIRST CLASS TICKET-- '+ first_class_ticket_amount + ', ECONOMY TICKET-- ' + economy_ticket_amount +  ',TOTAL TICKET COST --- '+ total_prize;

    document.getElementById('booked-quantity').innerText = total_booked_quantity;

})

function subtotal() {
    const first_class_ticket_amount = document.getElementById('first-class-ticket-amount');
    const first_class_ticketAmount = parseFloat(first_class_ticket_amount.value);

    const economy_ticket_amount = document.getElementById('economy-ticket-amount');
    const economy_ticketAmount = parseFloat(economy_ticket_amount.value);

    const subtotal_value = first_class_ticketAmount * 150 + economy_ticketAmount * 100;
    document.getElementById('subtotal').innerText = subtotal_value;
}

function vatAmount() {
    const subTotal = document.getElementById('subtotal').innerText;
    const sub_total = parseFloat(subTotal);
    const total_vat_amount = sub_total / 10;
    document.getElementById('total-vat').innerText = total_vat_amount ;

}

function total() {
    const subTotal = document.getElementById('subtotal').innerText;
    const subTotalValue = parseFloat(subTotal);

    const totalVat = document.getElementById('total-vat').innerText;
    const totalVatValue = parseFloat(totalVat);

    const totalValue = subTotalValue + totalVatValue;

    document.getElementById('total').innerText = totalValue;
}



function inputAmount(ticket_amount_id,ticket_prize_id,ticket_value) {
    const ticket_amount = document.getElementById(ticket_amount_id);
    const ticketAmount = parseInt(ticket_amount.value);
    if (ticketAmount => 0) {
        const ticket_prize = ticketAmount * ticket_value;
        document.getElementById(ticket_prize_id).innerText = ticket_prize;
    }
}

function addAmount(TicketAmountId,TicketPrizeId,ticket_prize) {
    const ticket_amount = document.getElementById(TicketAmountId);
    const ticketAmount = parseInt(ticket_amount.value);
    const total_amount = ticketAmount + 1 ;
    ticket_amount.value = total_amount;
    const total_ticket_prize = total_amount * ticket_prize;
    document.getElementById(TicketPrizeId).innerText = total_ticket_prize;
};
function subtractAmount(TicketAmountId,TicketPrizeId,ticket_prize) {
    const ticket_amount = document.getElementById(TicketAmountId);
    const ticketAmount = parseInt(ticket_amount.value);
    if (ticketAmount >0) {
        const total_amount = ticketAmount - 1 ;
        ticket_amount.value = total_amount;
        const total_ticket_prize = total_amount * ticket_prize;
        document.getElementById(TicketPrizeId).innerText = total_ticket_prize;
    }
}
function addSubTotal() {
    const ticket_prize = document.getElementById('first-class-prize').innerText;
    const total_ticket_prize = parseFloat(ticket_prize);

    const sub_total = document.getElementById('subtotal').innerText;
    const sub_total_amount = parseFloat(sub_total);

    const main_subTotal_value = total_ticket_prize + sub_total_amount;
     sub_total = main_subTotal_value;
}
