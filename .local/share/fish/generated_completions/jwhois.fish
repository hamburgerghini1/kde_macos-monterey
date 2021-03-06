# jwhois
# Autogenerated from man page /usr/share/man/man1/jwhois.1.gz
complete -c jwhois -l version -d 'display version, authors and licensing information'
complete -c jwhois -l help -d 'display a short help text'
complete -c jwhois -s c -l config -d 'uses FILE as a configuration file instead of the default'
complete -c jwhois -s h -l host -d 'overrides any hosts in the configuration file and queries HOST directly'
complete -c jwhois -s p -l port -d 'specifies a port number to use when querying a HOST'
complete -c jwhois -s f -l force-lookup -d 'forces a query to be made to a host even if a current object is available fro…'
complete -c jwhois -s v -l verbose -d 'outputs verbose debugging information while running (use this before sending …'
complete -c jwhois -s n -l no-redirect -d 'disable features that redirect queries from one server to another'
complete -c jwhois -s s -l no-whoisservers -d 'disable the built-in support for whois-servers. net'
complete -c jwhois -s a -l raw -d 'send query verbatim to receiving hosts instead of rewriting them according to…'
complete -c jwhois -s i -l display-redirections -d 'display every step in a redirection (default is to display only the last answ…'
complete -c jwhois -s d -l disable-cache -d 'completely disable both reading and writing to cache'
complete -c jwhois -s r -l rwhois -d 'force the query to use the rwhois protocoll instead of HTTP or whois'
complete -c jwhois -l rwhois-display -d 'asks receiving rwhois servers to display the results in the DISPLAY display i…'
complete -c jwhois -l rwhois-limit -d 'asks receiving rwhois servers to limit their responses to LIMIT matches'

