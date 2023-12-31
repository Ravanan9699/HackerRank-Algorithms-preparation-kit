/**
 * Created on Tue Feb 21 2023
 * 
 * @author Carlos Páez
 */
'use strict'

process.stdin.resume()
process.stdin.setEncoding( 'utf-8' )

let inputString: string = ''
let inputLines: string[] = []
let currentLine: number = 0

/* Reading the input from the console. */
process.stdin.on( 'data', function ( inputStdin: string ): void {
    inputString += inputStdin
} )

/* Reading the input from the console. */
process.stdin.on( 'end', function (): void {
    inputLines = inputString.split( '\n' )
    inputString = ''

    main()
} )

/**
 * It reads a line from the input file and returns it
 * @returns The current line of the inputLines array.
 */
function readLine (): string {
    return inputLines[ currentLine++ ]
}

/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges ( s: number, t: number, a: number, b: number, apples: number[], oranges: number[] ): void {
    const minLimit: number = -1e5
    const maxLimit: number = 1e5

    for ( const param of [ s, t, a, b ] ) {
        if ( !( 1 <= param && param <= maxLimit ) ) return
    }

    let validApples: number = 0
    let validOranges: number = 0

    for ( const apple of apples ) {
        if ( minLimit <= apple && apple <= maxLimit ) {
            if ( s <= ( apple + a ) && ( apple + a ) <= t ) validApples += 1
        }
    }

    for ( const orange of oranges ) {
        if ( minLimit <= orange && orange <= maxLimit ) {
            if ( s <= ( orange + b ) && ( orange + b ) <= t ) validOranges += 1
        }
    }

    console.log( `${ validApples }\n${ validOranges }` )
}

function main () {
    const firstMultipleInput: string[] = readLine().replace( /\s+$/g, '' ).split( ' ' )

    const s: number = parseInt( firstMultipleInput[ 0 ], 10 )

    const t: number = parseInt( firstMultipleInput[ 1 ], 10 )

    const secondMultipleInput: string[] = readLine().replace( /\s+$/g, '' ).split( ' ' )

    const a: number = parseInt( secondMultipleInput[ 0 ], 10 )

    const b: number = parseInt( secondMultipleInput[ 1 ], 10 )

    const thirdMultipleInput: string[] = readLine().replace( /\s+$/g, '' ).split( ' ' )

    const m: number = parseInt( thirdMultipleInput[ 0 ], 10 )

    const n: number = parseInt( thirdMultipleInput[ 1 ], 10 )

    const apples: number[] = readLine().replace( /\s+$/g, '' ).split( ' ' ).map( applesTemp => parseInt( applesTemp, 10 ) )

    const oranges: number[] = readLine().replace( /\s+$/g, '' ).split( ' ' ).map( orangesTemp => parseInt( orangesTemp, 10 ) )

    countApplesAndOranges( s, t, a, b, apples, oranges )
}
