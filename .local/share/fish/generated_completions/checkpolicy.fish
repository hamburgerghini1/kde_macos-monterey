# checkpolicy
# Autogenerated from man page /usr/share/man/man8/checkpolicy.8.gz
complete -c checkpolicy -s b -l binary -d 'Read an existing binary policy file rather than a source policy. conf file'
complete -c checkpolicy -s F -l conf -d 'Write policy. conf file rather than binary policy file'
complete -c checkpolicy -s C -l cil -d 'Write CIL policy file rather than binary policy file'
complete -c checkpolicy -s d -l debug -d 'Enter debug mode after loading the policy'
complete -c checkpolicy -s U -l handle-unknown -d 'Specify how the kernel should handle unknown classes or permissions (deny, al…'
complete -c checkpolicy -s M -l mls -d 'Enable the MLS policy when checking and compiling the policy'
complete -c checkpolicy -s c -d 'Specify the policy version, defaults to the latest'
complete -c checkpolicy -s o -l output -d 'Write a policy file (binary, policy'
complete -c checkpolicy -s S -l sort -d 'Sort ocontexts before writing out the binary policy'
complete -c checkpolicy -s t -l target -d 'Specify the target platform (selinux or xen)'
complete -c checkpolicy -s O -l optimize -d 'Optimize the final kernel policy (remove redundant rules)'
complete -c checkpolicy -s E -l werror -d 'Treat warnings as errors'
complete -c checkpolicy -s V -l version -d 'Show version information'
complete -c checkpolicy -s h -l help -d 'Show usage information'

