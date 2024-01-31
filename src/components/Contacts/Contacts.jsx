import styles from './contacts.module.scss'

function ContactsSection() {
    return ( 
        <section className={styles.container} id='contacte'>
            <h2>Contacte</h2>   
            <iframe title='Map'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.866951503794!2d28.81807446290565!3d47.003585336766875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97faa97aea19d%3A0xb7429a3cce334163!2sFinanko.md%20-%20Contabilitate%20%C8%99i%20Analiz%C4%83%20financiar%C4%83!5e0!3m2!1sen!2s!4v1706723175440!5m2!1sen!2s" Style="border:0;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
     );
}

export default ContactsSection;