let bank = {
    Kontostand: Geld,
    iban: 'DE879754577',
    bankname: 'volksbank',
    Kontoinhaber: 'svenja',
 abheben: function(ausgeben){
        this.Kontostand = this.Kontostand - ausgeben;
        console.log(ausgeben' € wurden abgehoben' this.Kontostand )
     }

}