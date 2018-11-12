// Listing 3.2  Final implementation of the insurance company autocomplete

################## index.html ##################
<input id="autocomplete">
<script>
    $( "#autocomplete" ).autocomplete({
        source: "searh.php",
        minLength: 2
    });
</script>

################## search.php ##################
<?
$term = $_GET[ "term" ];
$companies = array(
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

echo json_encode( $result );?>
