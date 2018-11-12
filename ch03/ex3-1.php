// Listing 3.1  Filtering autocomplete options in PHP

<?
$term = $_GET[ "term" ];
$companies = array( #B
    "AUTOMOBILE CLUB INTER-INSURANCE EXCHANGE",
    "AMERICAN FAMILY MUTUAL INSURANCE COMPANY",
    "BANKERS STANDARD INSURANCE COMPANY",
    ...
);

$result = array();
foreach ($companies as $company) {
    if ( strpos( strtoupper($company), strtoupper($term) )
         !== false ) {
        array_push( $result, $company );
    }
}

echo json_encode( $result );
?>
