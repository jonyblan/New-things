<<<<<<< HEAD
// Everything uses a list made by





// makes a list from an array
TList vecToList(const int v[], unsigned int dim ) {
    TList ans = NULL;
    while (dim) {
        TList aux = malloc(sizeof(TNode));
        aux->elem = v[--dim];
        aux->tail = ans;
        ans = aux;
    }
    return ans;
}

/*
** Funcion auxiliar para verificar los elementos de una lista
** Retorna 1 si la lista y el vector contienen los mismos elementos en el mismo orden
*/
int checkElems(const TList list, const int v[], int dim) {
    int i;
    TList aux;
    for(i=0, aux=list; i<dim && aux != NULL; i++, aux = aux->tail) {
    if ( aux->elem != v[i])
        return 0;
    }
    return aux == NULL && i==dim;
}

void freeList(TList list) {
    if ( list == NULL)
        return;
    freeList(list->tail);
    free(list);
}


// Biblioteca de lista de enteros ordenados sin repetir

/** Retorna 1 si es vacía, cero si no */
int isEmpty(const List list){
    return list==NULL;
}

int belongs(const TList list, int elem) {
    if (list==NULL || list->head > elem)
        return 0;
    if (list->head == elem)
        return 1;
    return belongs(list->tail, elem);
}

size_t size(const TList list){
    if (isEmpty(list)) {  // o   if ( list == NULL )
        return 0;
    }
    return 1 + size(list->tail);
}

size_t sizeIter(const struct node * list) {
    size_t cant = 0;
    while ( list != NULL ) {
        cant++;
        list = list->tail;
    }
    return cant;
}

TList add(TList list, int elem) {
    if (list == NULL || elem < list -> head) {
        List aux = malloc(sizeof(struct node));
        aux -> head = elem;
        aux -> tail = list;
        return aux;
    }
    if (list -> head == elem) {
        return list;
    }
    list -> tail = add(list->tail, elem);
    return list;
}


int * toArray(const TList list) {
    int dim = size(list);
    int * v = malloc(dim * sizeof(int));
    List aux = list;
    for (int i = 0; i < dim; i++)
    {
        v[i] = aux -> head;
        aux = aux ->tail;
    }
    return v;
}

TList removeElem(TList list, int elem) {
    if (list == NULL || elem < list ->head) {
        return list;
    }
    if (elem == list ->head) {
        List aux = list->tail;
        free (list);
        return aux;
    }
    list->tail = removeElem(list->tail,elem);
    return list;
}

int head(const TList list){
    if (isEmpty(list)){
        exit(1);
    }
    return list->head;
}

TList tail (const TList list){
    if (isEmpty(list)){
        exit(1);
    }
    return list->tail;
}

int get(const TList list, unsigned int idx){
    if(idx > sizeof(list)){
        exit(1);
    }
    return getRec(list->tail, idx-1);
}

static int getRec(const TList list, unsigned int idx){
    if (idx == 0) {
        return list->head;    
    }
    return get(list->tail, idx-1);
}

void freeList(TList list){
    if (list == NULL) {
        return;
    }
    freeList(list ->tail);
    free(list);
}
=======
// Everything uses a list made by





// makes a list from an array
TList vecToList(const int v[], unsigned int dim ) {
    TList ans = NULL;
    while (dim) {
        TList aux = malloc(sizeof(TNode));
        aux->elem = v[--dim];
        aux->tail = ans;
        ans = aux;
    }
    return ans;
}

/*
** Funcion auxiliar para verificar los elementos de una lista
** Retorna 1 si la lista y el vector contienen los mismos elementos en el mismo orden
*/
int checkElems(const TList list, const int v[], int dim) {
    int i;
    TList aux;
    for(i=0, aux=list; i<dim && aux != NULL; i++, aux = aux->tail) {
    if ( aux->elem != v[i])
        return 0;
    }
    return aux == NULL && i==dim;
}

void freeList(TList list) {
    if ( list == NULL)
        return;
    freeList(list->tail);
    free(list);
}


// Biblioteca de lista de enteros ordenados sin repetir

/** Retorna 1 si es vacía, cero si no */
int isEmpty(const List list){
    return list==NULL;
}

int belongs(const TList list, int elem) {
    if (list==NULL || list->head > elem)
        return 0;
    if (list->head == elem)
        return 1;
    return belongs(list->tail, elem);
}

size_t size(const TList list){
    if (isEmpty(list)) {  // o   if ( list == NULL )
        return 0;
    }
    return 1 + size(list->tail);
}

size_t sizeIter(const struct node * list) {
    size_t cant = 0;
    while ( list != NULL ) {
        cant++;
        list = list->tail;
    }
    return cant;
}

TList add(TList list, int elem) {
    if (list == NULL || elem < list -> head) {
        List aux = malloc(sizeof(struct node));
        aux -> head = elem;
        aux -> tail = list;
        return aux;
    }
    if (list -> head == elem) {
        return list;
    }
    list -> tail = add(list->tail, elem);
    return list;
}


int * toArray(const TList list) {
    int dim = size(list);
    int * v = malloc(dim * sizeof(int));
    List aux = list;
    for (int i = 0; i < dim; i++)
    {
        v[i] = aux -> head;
        aux = aux ->tail;
    }
    return v;
}

TList removeElem(TList list, int elem) {
    if (list == NULL || elem < list ->head) {
        return list;
    }
    if (elem == list ->head) {
        List aux = list->tail;
        free (list);
        return aux;
    }
    list->tail = removeElem(list->tail,elem);
    return list;
}

int head(const TList list){
    if (isEmpty(list)){
        exit(1);
    }
    return list->head;
}

TList tail (const TList list){
    if (isEmpty(list)){
        exit(1);
    }
    return list->tail;
}

int get(const TList list, unsigned int idx){
    if(idx > sizeof(list)){
        exit(1);
    }
    return getRec(list->tail, idx-1);
}

static int getRec(const TList list, unsigned int idx){
    if (idx == 0) {
        return list->head;    
    }
    return get(list->tail, idx-1);
}

void freeList(TList list){
    if (list == NULL) {
        return;
    }
    freeList(list ->tail);
    free(list);
}
>>>>>>> 86ceaeeec2ad18d16e396390387907a48c2aabcd
