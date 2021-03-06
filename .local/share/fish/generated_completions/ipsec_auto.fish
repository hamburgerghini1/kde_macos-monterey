# ipsec_auto
# Autogenerated from man page /usr/share/man/man8/ipsec_auto.8.gz
complete -c ipsec_auto -l add
complete -c ipsec_auto -l delete
complete -c ipsec_auto -l replace
complete -c ipsec_auto -l start
complete -c ipsec_auto -l up
complete -c ipsec_auto -l down
complete -c ipsec_auto -l route
complete -c ipsec_auto -l unroute
complete -c ipsec_auto -l ondemand
complete -c ipsec_auto -l ready
complete -c ipsec_auto -l rereadsecrets
complete -c ipsec_auto -l status -d 'operations do not take a connection name'
complete -c ipsec_auto -l fetchcrls -d 'operation reads all certificate revocation list (CRL) entries of loaded certi…'
complete -c ipsec_auto -l rereadall -d 'operation is equivalent to the execution of --rereadsecrets (in the past ther…'
complete -c ipsec_auto -l listpubkeys -d 'operation lists all RSA public keys either received from peers via the IKE pr…'
complete -c ipsec_auto -l listcerts -d 'operation lists all X'
complete -c ipsec_auto -l checkpubkeys -d 'operation lists all loaded X'
complete -c ipsec_auto -l listcacerts -d 'operation lists all X. 509 CA certificates contained in the NSS database'
complete -c ipsec_auto -l listcrls -d 'operation lists all Certificate Revocation Lists (CRLs) either loaded locally…'
complete -c ipsec_auto -l listall -d 'operation is equivalent to the execution of --listpubkeys, --listcerts, --lis…'
complete -c ipsec_auto -l purgeocsp -d 'operation displays --listall and purges the NSS OCSP cache'
complete -c ipsec_auto -l showonly -d 'option causes auto to show the commands it would run, on standard output, and…'
complete -c ipsec_auto -l asynchronous -d 'option, applicable only to the up operation, tells pluto to attempt to establ…'
complete -c ipsec_auto -l verbose -d 'option instructs auto to pass through all output from ipsec_whack(8), includi…'
complete -c ipsec_auto -l config -d 'option specifies a non-standard location for the IPsec configuration file (de…'

