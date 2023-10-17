class Log {

	public today: Date = new Date();
    public date: string;
    public time: string;
	constructor() {
		let _dateString = `${this.today.getFullYear()}-${(this.today.getMonth() + 1)}-${this.today.getDate()}`;
		let _timeString = `${this.today.getHours()}:${this.today.getMinutes()}:${this.today.getSeconds()}`;

        this.time = _timeString;
        this.date = _dateString;
	}

	// Adds INFO prefix string to the log string
	public info (_string: string): void {
		this.addLog('INFO', _string);
	}

	// Adds WARN prefix string to the log string
	public warn (_string: string): void {
		this.addLog('WARN', _string);
	}

	// Adds ERROR prefix string to the log string
	public error (_string: string): void {
		// Line break and show the first line
		console.log('\x1b[31m%s\x1b[0m', '[ERROR] :: ' + _string.split(/r?\n/)[0]);

		this.addLog('ERROR', _string);
	}

	// Adds the custom prefix string to the log string
	public custom (_filename: string, _string: string): void {
		this.addLog(_filename, _string);
	}

    public addLog(_type: string, _string:string): void {
		_type = _type.toUpperCase();

        console.log(`${this.date}  ${this.time}  ${_type} : ${_string}` )
    }

}

export default new Log;

/* NOTE : */
// console.log('\x1b[31m%s\x1b[0m',"Error ");
// console.log('\x1b[32m%s\x1b[0m',"Green ");
// console.log('\x1b[33m%s\x1b[0m',"Warn ");
// console.log('\x1b[34m%s\x1b[0m',"Blue ");
// console.log('\x1b[35m%s\x1b[0m',"Purple ");
// console.log('\x1b[36m%s\x1b[0m',"Light blue ");
