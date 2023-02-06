**Cryptography** : Communication in an insecure channel

## Classification of attacks

Often many possible attack approches ("attack vectors")

```
                Cryptanalysis              
                /    |      \               
               /     |       \              Side channel analysis 
              /      |        \               with oscilloscope
             /   Social Eng.   \              (deduce the key)
            /                   \
           /                Implem. attacks
       Classical       
       /       \
      /         \
BruteForce     Analytical
```

# Modular arithmetic

**Goal**: computation in finite set

## Modulo operator


$\textrm{Let} \\ \qquad a,r,z \in\Z \ \textrm{and} \ m>0 \\
\textrm{We write} \\ \qquad a \ \cong \ r\!\mod{m} \\
\textrm{If} \\ \qquad m \ \textrm{divides} \ (a-r), \ \textrm{i.e} \\
\qquad m \mid (a-r) \\~\\
\textrm{Example: } \\ 
\qquad a =13, \ m = 9 \\
\qquad r = ? \\
\qquad 13 \cong 4\! \mod{9} \\
\qquad a-r = 13-4 = 9$

## Computation of the remainder

$\textrm{given } a,m \in \Z \\ \quad a = qm + r$

($q$ is quotient)


Example:

$\quad a=42, m=9 \\
\quad 42 = 4 \cdot 9 + 6 \Rightarrow r=6$

But also

$\quad 42 = 3 \cdot 9 +15 \Rightarrow r = 15$

But also

$\quad 42 = 5 \cdot 9 +(-3) \Rightarrow r = -3$

> => **The remainder is not unique**